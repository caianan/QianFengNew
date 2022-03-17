/* 使用兼容语法获取css样式的方法 */
function myGetStyle(element,type) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element)[type] 
    } else {
        return element.currentStyle[type]
        
    }
}