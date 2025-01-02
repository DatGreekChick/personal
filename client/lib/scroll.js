export const scrollToSection = sectionId => {
  const sectionHeader = document.getElementById(sectionId)

  if (sectionHeader) {
    window.scrollTo({
      // give it an offset so the header appears at the top of the scroll
      top: sectionHeader.getBoundingClientRect().top + window.pageYOffset - 60,
      behavior: 'smooth',
    })
  }
}
