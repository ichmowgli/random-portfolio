
function toggleHidden (event, elementId, shownType) {
    const type = document.getElementById(elementId).style.display;
    if (type !== shownType) {
      document.getElementById(elementId).style.display = shownType;
    } else {
      document.getElementById(elementId).style.display = 'none';
    }
};

function toggleClass (event, elementId, className) {
    document.getElementById(elementId).classList.toggle(className);
}