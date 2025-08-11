// export function copyStyles(sourceDoc, targetDoc) {
//     Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
//         try {
//             if (styleSheet.cssRules) {
//                 const newStyle = targetDoc.createElement('style');
//                 Array.from(styleSheet.cssRules).forEach(rule => {
//                     newStyle.appendChild(targetDoc.createTextNode(rule.cssText));
//                 });
//                 targetDoc.head.appendChild(newStyle);
//             } else if (styleSheet.href) {
//                 const newLink = targetDoc.createElement('link');
//                 newLink.rel = 'stylesheet';
//                 newLink.href = styleSheet.href;
//                 targetDoc.head.appendChild(newLink);
//             }
//         } catch (e) {
//             console.warn('Could not access stylesheet:', e);
//         }
//     });
// }

export function copyStyles(sourceDoc, targetDoc) {
    Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
        try {
            if (styleSheet.cssRules) {
                // Inline or same-origin CSS
                const newStyle = targetDoc.createElement('style');
                Array.from(styleSheet.cssRules).forEach(rule => {
                    newStyle.appendChild(targetDoc.createTextNode(rule.cssText));
                });
                targetDoc.head.appendChild(newStyle);
            }
        } catch (e) {
            // Likely a cross-origin stylesheet, so just link it instead
            if (styleSheet.href) {
                const newLink = targetDoc.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = styleSheet.href;
                targetDoc.head.appendChild(newLink);
            } else {
                console.warn('Could not access stylesheet:', e);
            }
        }
    });
}
