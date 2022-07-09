import { createContext } from 'react';

var ACCORDION_BLOCK = 'szh-accordion';
var ACCORDION_PREFIX = 'szh-adn';
var ACCORDION_BTN_ATTR = "data-" + ACCORDION_BLOCK + "-btn";
var ACCORDION_ATTR = "data-" + ACCORDION_BLOCK;
var AccordionContext = /*#__PURE__*/createContext({});

export { ACCORDION_ATTR, ACCORDION_BLOCK, ACCORDION_BTN_ATTR, ACCORDION_PREFIX, AccordionContext };