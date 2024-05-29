function toggleMenu() {
  const navList = document.getElementById("mobile-nav");
  navList.ariaExpanded === "false" ? (navList.ariaExpanded = "true") : (navList.ariaExpanded = "false");
  if (navList.ariaExpanded === "true") {
    navList.classList.remove("hidden");
    navList.classList.add("flex");
  } else {
    navList.classList.add("hidden");
    navList.classList.remove("flex");
  }
}

const closeMenu = () => {
  const navList = document.getElementById("mobile-nav");
  navList.ariaExpanded = "false";
  navList.classList.add("hidden");
  navList.classList.remove("flex");
};
