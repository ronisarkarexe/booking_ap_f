import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  categoryTitle: string;
  shortDescription: string;
  categoryIcon: string;
  featuredImageUrl: string;
  category: string;
  status: boolean;
  detailedDescription: string;
  seoKeywords: string;
  buttonText: string;
  altText: string;
}

const AddCategory = () => {
  const [formData, setFormData] = useState<FormData>({
    categoryTitle: "",
    shortDescription: "",
    categoryIcon: "",
    featuredImageUrl: "",
    category: "",
    status: true,
    detailedDescription: "",
    seoKeywords: "",
    buttonText: "",
    altText: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://booking-app-b.vercel.app/api/v1/category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      const data = await response.json();
      if (data) {
        setFormData({
          categoryTitle: "",
          shortDescription: "",
          categoryIcon: "",
          featuredImageUrl: "",
          category: "",
          status: true,
          detailedDescription: "",
          seoKeywords: "",
          buttonText: "",
          altText: "",
        });
        alert("Categories Added Successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2 mt-5">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Add New Category</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Title
                  </label>
                  <input
                    type="text"
                    name="categoryTitle"
                    value={formData.categoryTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                    placeholder="Enter category title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Short Description
                  </label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                    rows={3}
                    placeholder="Enter short description"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Button Text
                  </label>
                  <input
                    type="text"
                    name="buttonText"
                    value={formData.buttonText}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                    placeholder="Enter Button Text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alt Text
                  </label>
                  <textarea
                    name="altText"
                    value={formData.altText}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                    rows={3}
                    placeholder="Enter Alt Text"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Icon
                  </label>
                  <select
                    name="categoryIcon"
                    value={formData.categoryIcon}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                  >
                    <option disabled>Select an icon</option>
                    <option>🏖️ Beach</option>
                    <option>🏔️ Mountain</option>
                    <option>🏛️ Cultural</option>
                    <option>🌆 City</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    name="featuredImageUrl"
                    value={formData.featuredImageUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                    placeholder="Enter image URL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                  >
                    <option disabled>Select Option</option>
                    <option>Hotels & Resorts</option>
                    <option>Car Rentals</option>
                    <option>Tour Operators</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="true"
                        checked={formData.status}
                        onChange={handleChange}
                        className="text-custom focus:ring-custom"
                      />
                      <span className="ml-2">Active</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="false"
                        checked={!formData.status}
                        onChange={handleChange}
                        className="text-custom focus:ring-custom"
                      />
                      <span className="ml-2">Draft</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Detailed Description
              </label>
              <textarea
                name="detailedDescription"
                value={formData.detailedDescription}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                rows={4}
                placeholder="Enter detailed description"
              ></textarea>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SEO Keywords
              </label>
              <input
                type="text"
                name="seoKeywords"
                value={formData.seoKeywords}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                placeholder="Enter keywords separated by commas"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-8">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-custom text-white rounded-lg hover:bg-custom/90"
              >
                Save Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
