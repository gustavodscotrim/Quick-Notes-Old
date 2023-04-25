
// GET Homepage

exports.homepage = async(req, res) => {
    const locals = {
        title: "Quick Notes",
        description: "Note Web Application"
    }
    
    res.render("index", {
        locals,
        layout: "../views/layouts/front-page"
        });
}

// GET About

exports.about = async(req, res) => {
    const locals = {
        title: "About - Quick Notes",
        description: "Note Web Application"
    }
    
    res.render("about", locals);
}