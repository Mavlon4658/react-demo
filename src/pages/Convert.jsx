import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import Hero from "./Index"



export default function Convert () {
    console.log(process(html.toString(Hero)))
    return (<>
    <pre>
{<code id="myDiv">{stripDataAttrs(process(html.toString(Hero)))}</code>}
    </pre>
    </>)
}

function process(str) {
    var div = document.createElement("div");
    div.innerHTML = str.trim();

    return "<body>" + format(div, 0).innerHTML + "</body>";
}

function format(node, level) {
    var indentBefore = new Array(level++ + 1).join("  "),
        indentAfter = new Array(level - 1).join("  "),
        textNode;

    for (var i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode("\n" + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild === node.children[i]) {
            textNode = document.createTextNode("\n" + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}

function stripDataAttrs(html) {
    return html
      // attributni "..." yoki '...' ichida bo'lsin, yoki qiymatsiz boolean attribute bo'lsa ham
      .replace(/\sdata-[a-zA-Z0-9:-]+=(?:"[^"]*"|'[^']*')/g, "")
      .replace(/\sdata-[a-zA-Z0-9:-]+\b/g, "");
  }

const html = ReactDOMServer.renderToStaticMarkup(<Hero />);
