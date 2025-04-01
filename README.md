# Getting Started with HLO Graph Visualization

To convert HLO text to an SVG or PNG file, follow these steps:

1. **Modify the `src/HLO/HLO2PNG.js` file:**

   - Import your HLO text file. For example:
     ```js
     import text from "./pbtxt/gpt2_tp=1_n_layer=1.js";
     ```

   - Specify the `dotFile` you want to generate. For example:
     ```js
     const dotFile = 'gpt2_tp=1_n_layer=1.dot';
     ```

2. **Run the conversion:**

   Once you have made the necessary changes, run the script to convert the HLO text to an SVG or PNG file.

3. **Output:**

   The result will be a visual representation of the HLO graph, saved as an SVG or PNG.

---

### Notes:
- Ensure that the file paths are correct.
- This process requires the appropriate environment and dependencies for graph visualization.

