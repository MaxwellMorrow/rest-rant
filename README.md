# Project REST-Rant

REST-Rant is an app where users can review restaurants.

colors in hex codes
primary #544B3D
Secondary #4E6E58
highlight #4C8577

|Method  |Path                  |        Purpose       |
|--------|----------------------|----------------------|
|Get     |/                     | Home page            |
|Get     |/places               |places index page     |
|Post    |/places               | Create new place     |
|Get     |/places/new           | form page for place  |
|Get     |/places/:id           | details about place  |
|Put     |/places/:id           | update a place       |
|Get     |/places/:id/edit      | edit existing place  |
|Delete  |/places:id            |  delete a place      |
|Post    |/places:id/rant       |create a rant on place|
|Delete  |/places:id/rant:rantId|delete a rant on place|
|Get     | *                    | 404 page not found   |


Each PLACE will need the following
 - Name       (String)
 - City       (String)
 - State      (String)
 - Cuisines   (String)
 - pic        (String)
