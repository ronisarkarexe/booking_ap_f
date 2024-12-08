import { useEffect, useState } from "react";

export interface ICategoryData {
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

interface CategoriesComponentProps {
  searchQuery: string;
}

const CategoriesComponent = ({ searchQuery }: CategoriesComponentProps) => {
  const [allCategories, setAllCategories] = useState<ICategoryData[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<ICategoryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://booking-app-b.vercel.app/api/v1/category");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAllCategories(data.data);
        setFilteredCategories(data.data);
      } catch {
        // error
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredCategories(
        allCategories.filter((category) =>
          category.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredCategories(allCategories);
    }
  }, [searchQuery, allCategories]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={category.featuredImageUrl}
              alt={category.altText}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {category.categoryTitle}
              </h3>
              <p className="text-gray-600 mb-4">{category.shortDescription}</p>
              <button className="!rounded-button bg-custom text-white px-4 py-2 w-full hover:bg-custom/90">
                {category.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesComponent;
