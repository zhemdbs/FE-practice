const tabMenuItem = document.querySelectorAll('.tab-menu-item');
const contentsBody = document.querySelectorAll('.body-contents');

// console.log(tabMenuItem)
tabMenuItem.forEach((item) => {
  item.addEventListener('click', () => {
    const currentTab = item.dataset.tab;
    tabMenuItem.forEach((tabItem) => {
      tabItem.classList.remove('active');
    })
    item.classList.add('active');
    
    contentsBody.forEach((content) => {
      const currentContent = content.dataset.body;
      
      if (currentContent === currentTab) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
})