"use strict";
{
    // callMap path/c3runtime/plugin.js
    const DOM_COMPONENT_ID = "robotkaposzta-texteditor";

    /**
     * @external SDKPluginBase
     * @desc The SDKPluginBase interface is used as the base class for your plugin in the runtime.
     * @see https://www.construct.net/en/make-games/manuals/addon-sdk/runtime-reference/base-classes/sdkpluginbase
     */
    /**
     * @classdesc TextManager editor class.
     * @extends external:SDKPluginBase
     */
    class TextEditorRuntimePlugin extends globalThis.C3.SDKDOMPluginBase {
        /**
         * @desc Initialize plugin in runtime.
         * @param {object} opts - Options that gives to the parent's constructor.
         */
        constructor() {
            super(opts, DOM_COMPONENT_ID);

            this.AddElementMessageHandler("text-changed", (sdkInst, e) => {
                sdkInst._OnTextChange(e["t"], e["te"]);
            });
        }

        /**
         * @desc Initialize plugin in runtime.
         * @param {object} opts - Options that gives to the parent's constructor.
         */

    };
  
    globalThis.C3.Plugins.RobotKaposzta_TextEditor = TextEditorRuntimePlugin;
};