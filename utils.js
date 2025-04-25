export function applyFilters(doctors, query) {
    let filtered = [...doctors];
  
    const search = query.get("search") || "";
    const mode = query.get("mode");
    const specialties = query.getAll("specialties");
    const sort = query.get("sort");
  
    if (search) {
      filtered = filtered.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    if (mode) {
      filtered = filtered.filter((doc) => doc.mode === mode);
    }
  
    if (specialties.length > 0) {
      filtered = filtered.filter((doc) =>
        specialties.every((spec) => doc.specialties.includes(spec))
      );
    }
  
    if (sort === "fees") {
      filtered.sort((a, b) => a.fees - b.fees);
    } else if (sort === "experience") {
      filtered.sort((a, b) => b.experience - a.experience);
    }
  
    return filtered;
  }
  