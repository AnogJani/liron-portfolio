const isMobile = navigator.userAgentData.mobile;

console.log(isMobile);

if (isMobile) {
    document.querySelector("body").style.background = "red";
}