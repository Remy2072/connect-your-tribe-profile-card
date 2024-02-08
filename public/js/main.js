// document.addEventListener('scroll', function() {
//     const viewPortHeight = window.innerHeight;
//     const scrollElement = document.querySelector('.container');
//     const scrollElement2 = document.querySelector('.container-2');
//     const scrollAmount = window.scrollY; // Get the current vertical scroll position
//     const scrollAmountAdjusted = scrollAmount * 0.25;
//     const scrollAmountAdjusted2 = (viewPortHeight - scrollAmount) * -0.25;

//     const opacity = 1 - (scrollAmount/viewPortHeight);
//     const opacity2 = (scrollAmount/viewPortHeight);

//     const opacityRounded = Math.round(opacity * 10) / 10;
//     const opacityRounded2 = Math.round(opacity2 * 10) / 10;

//     console.log(opacityRounded) 

//     // Calculate the transform percentage based on the scroll amount.
//     // You might need to adjust the formula depending on the exact effect you're going for.
//     // This example assumes you want to move the element up by 1px for every 1px scrolled.
//     const transformAmount = "translateY(-${scrollAmount}px)";
  
//     // Apply the transformation
//     // scrollElement.style.transform = transformAmount;
//     scrollElement.style.transform = "translateY("+ scrollAmountAdjusted + "px)";
//     scrollElement.style.opacity = opacityRounded;


//     if (scrollAmount >= viewPortHeight ) {
//         scrollElement2.style.transform = "translateY("+ scrollAmountAdjusted2 + "px)";
//         scrollElement2.style.opacity = opacityRounded2;

//     }



//   });