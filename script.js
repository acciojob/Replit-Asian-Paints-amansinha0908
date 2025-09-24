//your JS code here. If required.
 const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");
    const blockInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");
    const gridItems = document.querySelectorAll(".grid-item");

    
    function resetColors() {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    }

 
    changeButton.addEventListener("click", () => {
      const blockId = blockInput.value.trim();
      const color = colorInput.value.trim();

      resetColors(); 

      if (blockId && color) {
        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
          targetBlock.style.backgroundColor = color;
        } else {
          alert("Invalid Block ID! Enter 1–9.");
        }
      } else {
        alert("Please enter both Block ID and Color.");
      }
    });

   
    resetButton.addEventListener("click", resetColors);