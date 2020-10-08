/**
 *  Tips which renders individual tip objects as HTML
 */

export const Tip = (tipObj) => {
    return `
    <div class=tip__One">
    <p class="tip__topic">Topic: ${tipObj.topic}</p>
    <p class="tip__text">${tipObj.text}</p>
    <p class="tip__paragraph">${tipObj.paragraph}</p>  
    </div>
    `
}