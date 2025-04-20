"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeSettings() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("text"); // "text" or "images"

  // Text content state
  const [textContent, setTextContent] = useState({
    mainTitle: "Tweetalig Onderwijs",
    secondaryTitle: "IVS Alliance",
    tagline:
      "Education is the best most powerful weapon we can use to change the world.",
    buttonText1: "FOR TEACHERS",
    buttonText2: "FOR STUDENTS",
  });

  // Slider images state
  const [sliderImages, setSliderImages] = useState([
    { id: 1, path: "/assets/M1.jpg", name: "Slider Image 1" },
    { id: 2, path: "/assets/M2.jpg", name: "Slider Image 2" },
    { id: 3, path: "/assets/M3.jpg", name: "Slider Image 3" },
  ]);

  // New image upload state
  const [newImage, setNewImage] = useState(null);
  const [newImageName, setNewImageName] = useState("");
  const [imagePreviews, setImagePreviews] = useState({});
  // Store blob URLs for data URLs
  const [blobUrls, setBlobUrls] = useState({});

  // Create blob URLs from data URLs
  const createBlobUrl = (dataUrl) => {
    // Convert data URL to Blob
    const byteString = atob(dataUrl.split(",")[1]);
    const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([ab], { type: mimeString });
    return URL.createObjectURL(blob);
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedTextContent = localStorage.getItem("hero-text-content");
    if (storedTextContent) {
      setTextContent(JSON.parse(storedTextContent));
    }

    const storedSliderImages = localStorage.getItem("hero-slider-images");
    if (storedSliderImages) {
      try {
        const parsedImages = JSON.parse(storedSliderImages);

        // Create blob URLs for data URLs
        const urls = {};
        const imagesWithData = parsedImages.map((img) => {
          if (img.dataUrl) {
            try {
              urls[img.id] = createBlobUrl(img.dataUrl);
              return {
                ...img,
                path: urls[img.id],
              };
            } catch (error) {
              console.error("Error creating blob URL:", error);
              return img;
            }
          }
          return img;
        });

        setBlobUrls(urls);
        setSliderImages(imagesWithData);
      } catch (error) {
        console.error("Error parsing stored images:", error);
      }
    }

    // Cleanup function to revoke blob URLs when component unmounts
    return () => {
      Object.values(blobUrls).forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, []);

  // Save text content changes
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setTextContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save all text content to localStorage
  const saveTextContent = () => {
    localStorage.setItem("hero-text-content", JSON.stringify(textContent));
    alert("Text content saved successfully!");
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setNewImageName(file.name);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        try {
          const blobUrl = createBlobUrl(dataUrl);
          setImagePreviews((prev) => ({
            ...prev,
            new: {
              dataUrl,
              blobUrl,
            },
          }));
        } catch (error) {
          console.error("Error creating blob URL for preview:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Add new image to slider
  const addNewImage = () => {
    if (!newImage) {
      alert("Please select an image to upload");
      return;
    }

    // Read the file as a data URL (base64)
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result;

      try {
        // Create blob URL for display
        const blobUrl = createBlobUrl(dataUrl);

        // Create new image object
        const newId =
          sliderImages.length > 0
            ? Math.max(...sliderImages.map((img) => img.id)) + 1
            : 1;

        const newSliderImage = {
          id: newId,
          path: blobUrl,
          dataUrl: dataUrl, // Store the data URL for persistence
          name: newImageName || `Slider Image ${newId}`,
        };

        // Add to state
        const updatedImages = [...sliderImages, newSliderImage];
        setSliderImages(updatedImages);

        // Add to blob URLs
        setBlobUrls((prev) => ({
          ...prev,
          [newId]: blobUrl,
        }));

        // Save to localStorage with the data URL included
        localStorage.setItem(
          "hero-slider-images",
          JSON.stringify(
            updatedImages.map((img) => ({
              ...img,
              path: img.path.startsWith("blob:") ? undefined : img.path, // Don't save blob URLs
            }))
          )
        );

        // Reset form
        setNewImage(null);
        setNewImageName("");
        setImagePreviews((prev) => {
          if (prev.new?.blobUrl) {
            URL.revokeObjectURL(prev.new.blobUrl);
          }
          const updated = { ...prev };
          delete updated.new;
          return updated;
        });

        alert("Image added successfully!");
      } catch (error) {
        console.error("Error adding new image:", error);
        alert("Error adding image. Please try again with a smaller image.");
      }
    };

    reader.readAsDataURL(newImage);
  };

  // Remove image from slider
  const removeImage = (id) => {
    if (window.confirm("Are you sure you want to remove this image?")) {
      // Revoke blob URL if it exists
      if (blobUrls[id]) {
        URL.revokeObjectURL(blobUrls[id]);
        setBlobUrls((prev) => {
          const updated = { ...prev };
          delete updated[id];
          return updated;
        });
      }

      const updatedImages = sliderImages.filter((img) => img.id !== id);
      setSliderImages(updatedImages);

      // Save to localStorage without the removed image
      localStorage.setItem(
        "hero-slider-images",
        JSON.stringify(
          updatedImages.map((img) => ({
            ...img,
            path: img.path.startsWith("blob:") ? undefined : img.path, // Don't save blob URLs
          }))
        )
      );
    }
  };

  // Reorder images (move up)
  const moveImageUp = (index) => {
    if (index === 0) return;
    const updatedImages = [...sliderImages];
    [updatedImages[index - 1], updatedImages[index]] = [
      updatedImages[index],
      updatedImages[index - 1],
    ];
    setSliderImages(updatedImages);
    localStorage.setItem(
      "hero-slider-images",
      JSON.stringify(
        updatedImages.map((img) => ({
          ...img,
          path: img.path.startsWith("blob:") ? undefined : img.path, // Don't save blob URLs
        }))
      )
    );
  };

  // Reorder images (move down)
  const moveImageDown = (index) => {
    if (index === sliderImages.length - 1) return;
    const updatedImages = [...sliderImages];
    [updatedImages[index], updatedImages[index + 1]] = [
      updatedImages[index + 1],
      updatedImages[index],
    ];
    setSliderImages(updatedImages);
    localStorage.setItem(
      "hero-slider-images",
      JSON.stringify(
        updatedImages.map((img) => ({
          ...img,
          path: img.path.startsWith("blob:") ? undefined : img.path, // Don't save blob URLs
        }))
      )
    );
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-2 sm:p-4 md:p-6">
      {/* Header with logo and navigation */}
      <header className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4 mb-3 sm:mb-0">
            <div className="text-xl sm:text-2xl font-bold text-[#0c3458]">
              IVS Alliance
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Admin Panel
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="flex space-x-4">
            <Link href="/admin" className="text-[#0c3458] font-medium">
              Back to Admin
            </Link>
          </nav>
        </div>
      </header>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">
          Home Page Settings
        </h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "text"
                ? "text-[#0c3458] border-b-2 border-blue-700"
                : "text-gray-600 hover:text-blue-900"
            }`}
            onClick={() => setActiveTab("text")}
          >
            Text Content
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "images"
                ? "text-[#0c3458] border-b-2 border-blue-700"
                : "text-gray-600 hover:text-blue-900"
            }`}
            onClick={() => setActiveTab("images")}
          >
            Slider Images
          </button>
        </div>

        {/* Text Content Tab */}
        {activeTab === "text" && (
          <div>
            <p className="text-gray-600 mb-4">
              Edit the text content that appears on the home page hero section.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="mainTitle">
                  Main Title
                </label>
                <input
                  type="text"
                  id="mainTitle"
                  name="mainTitle"
                  value={textContent.mainTitle}
                  onChange={handleTextChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="secondaryTitle"
                >
                  Secondary Title
                </label>
                <input
                  type="text"
                  id="secondaryTitle"
                  name="secondaryTitle"
                  value={textContent.secondaryTitle}
                  onChange={handleTextChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="tagline">
                Tagline
              </label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={textContent.tagline}
                onChange={handleTextChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="buttonText1"
                >
                  First Button Text
                </label>
                <input
                  type="text"
                  id="buttonText1"
                  name="buttonText1"
                  value={textContent.buttonText1}
                  onChange={handleTextChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="buttonText2"
                >
                  Second Button Text
                </label>
                <input
                  type="text"
                  id="buttonText2"
                  name="buttonText2"
                  value={textContent.buttonText2}
                  onChange={handleTextChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={saveTextContent}
                className="bg-[#0c3458] hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Slider Images Tab */}
        {activeTab === "images" && (
          <div>
            <p className="text-gray-600 mb-4">
              Manage the slider images that appear in the hero section. For best
              results, use images with a 16:9 ratio.
            </p>

            {/* Current Slider Images */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-blue-900 mb-3">
                Current Slider Images
              </h3>

              {sliderImages.length > 0 ? (
                <div className="space-y-4">
                  {sliderImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center p-3 border border-gray-200 rounded-lg bg-gray-50"
                    >
                      <div className="w-full sm:w-24 h-24 relative mr-4 mb-3 sm:mb-0 overflow-hidden rounded">
                        {/* Use unoptimized Image component for all images */}
                        <div className="w-full h-full relative">
                          <Image
                            src={image.path}
                            alt={image.name}
                            fill
                            sizes="96px"
                            className="object-cover"
                            unoptimized={
                              image.path.startsWith("blob:") ||
                              image.path.startsWith("data:")
                            }
                          />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <p className="font-medium text-gray-800">
                          {image.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {image.path.startsWith("blob:") ||
                          image.path.startsWith("data:")
                            ? "Uploaded image (stored locally)"
                            : image.path}
                        </p>
                      </div>

                      <div className="flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 mt-3 sm:mt-0">
                        <button
                          onClick={() => moveImageUp(index)}
                          disabled={index === 0}
                          className={`p-1 rounded ${
                            index === 0
                              ? "text-gray-400"
                              : "text-blue-600 hover:bg-blue-50"
                          }`}
                          title="Move up"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => moveImageDown(index)}
                          disabled={index === sliderImages.length - 1}
                          className={`p-1 rounded ${
                            index === sliderImages.length - 1
                              ? "text-gray-400"
                              : "text-blue-600 hover:bg-blue-50"
                          }`}
                          title="Move down"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => removeImage(image.id)}
                          className="p-1 rounded text-[#0c3458] hover:bg-blue-50"
                          title="Delete"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 border border-dashed border-gray-200 rounded-lg">
                  <p className="text-gray-500">
                    No slider images have been added yet.
                  </p>
                </div>
              )}
            </div>

            {/* Add New Image */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-blue-900 mb-3">
                Add New Image
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="imageFile"
                  >
                    Image File
                  </label>
                  <input
                    type="file"
                    id="imageFile"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full border cursor-pointer border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="imageName"
                  >
                    Image Name
                  </label>
                  <input
                    type="text"
                    id="imageName"
                    value={newImageName}
                    onChange={(e) => setNewImageName(e.target.value)}
                    placeholder="Enter a descriptive name for the image"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {imagePreviews.new && (
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">Preview:</p>
                  <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden relative">
                    <Image
                      src={imagePreviews.new.blobUrl}
                      alt="Preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={addNewImage}
                  disabled={!newImage}
                  className={`py-2 px-6 rounded-lg transition ${
                    newImage
                      ? "bg-[#0c3458] hover:bg-blue-700 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Add to Slider
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
