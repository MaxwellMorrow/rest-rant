
const router = require("express").Router();
const db = require("../models");
const places = require("../models/places");

// /places route gets index.jsx page 
router.get("/", (req, res) => {
  db.Place.find()
  .then((places)=>{
    res.render("places/index", {places})
  })
  .catch(err => {
    console.log(err)
    res.render("error404")
  })
});

// /places post route allows us to add another place redirects to index
router.post("/", (req, res) => {
  db.Place.create(req.body).then(()=>{
    res.redirect("/places")
  }).catch(err =>{
    console.log("err",err)
    res.render("error404")
  });
});

//  /places/new route gets new.jsx page 
router.get("/new", (req, res) => {
  res.render("places/new");
});

// /places/id route gets show.jsx with place data thats passed in
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments)
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// /places/:id/comment route supposed to post the comment to DB
router.post("/:id/comment", (req, res) => {
  if (req.body.rant) {
    req.body.rant = true;
  } else {
    req.body.rant = false;
  }
  db.Place.findById(req.params.id)
    .then((place) => {
      console.log(db.Comment);
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});
// patch route for edit
router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// delete route working well 
router.delete("/:id", (req, res) => {
 db.Place.findByIdAndDelete(req.params.id)
 .then(place => {
   res.redirect("/places")
 })
 .catch(err =>{
   console.log("err", err)
   res.render("error404")
 })
});

// route working well gets the edit.jsx page 
router.get("/:id/edit", (req, res) => {
 db.Place.findById(req.params.id)
 .then(place => {
   res.render("places/edit", {place}) 
 })
 .catch(err => {
   res.render("error404")
 })
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
