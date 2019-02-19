let video;
let features;
let knn;
let labelP;
let ready = false;
let label = "nothing";

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(400, 400);
  video.hide();
  features = ml5.featureExtractor("MobileNet", modelLoaded);
  knn = ml5.KNNClassifier();
  labelP = createP("need training data");
  labelP.style("font-size", "32pt");
}

function goClassify() {
  const logits = features.infer(video);
  knn.classify(logits, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      label = result.label;
      labelP.html(result.label);
      goClassify();
      //console.log(result);
    }
  });
}

function keyPressed() {
  const logits = features.infer(video);
  if (key == "l") {
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
}

function modelLoaded() {
  console.log("Model ready!");
}

function draw() {
  image(video, 0, 0);

  if (!ready && knn.getNumLabels() > 0) {
    goClassify();
    ready = true;
  }
}
