walk(document.body);

function walk(node) {
    // stolen from https://github.com/panicsteve/cloud-to-butt/
	// who stole from:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\bLGA\b/g, "LGA, a dumpster fire of a transit facility -@WaltHickey");

    textNode.nodeValue = v;
}