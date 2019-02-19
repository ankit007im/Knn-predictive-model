# K-Nearest Neighour
This is an unsupervised learning algorthim which predicts between images.
# How to use this repo
There are two files which contains the code ``sketch.js`` and ``sketch2.js`` all the changes can be done in these files.
For using this file you have to make changes in ``knn.html`` under src=
``<script language="javascript" type="text/javascript" src=" ??? .js"></script>``
Going to next step--
For creating a model in ``sketch.js`` do following
1. Press "l" button on keyboard for adding the image to learn from.
2. Press "R" button on keyboard for adding the image to learn from.
3. Press "S" to save the model.
For your Key changes in  follwing button change the following
``` if (key == "l") {
    knn.addExample(logits, "left");
    console.log("left hand");
  } else if (key == "r") {
    knn.addExample(logits, "right");
    console.log("right hands");
  } else if (key == "n") {
    knn.addExample(logits, "no hand");
    console.log("NO hands");
  } else if (key == "a") {
    knn.addExample(logits, "Both hand");
    console.log("Both hands");
  } else if (key == "s") {
    save(knn, "model.json");
  }
  ```
  The second file does same as first but it takes model which is saved and run it
