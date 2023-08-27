export const mapToCategories = (categories: string) => {
	return categories.split(';').filter((e) => e);
  };