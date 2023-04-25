// GET Dashboard

exports.dashboard = async(req, res) => {
    const locals = {
        title: "Dashboard",
        description: "Quick Notes",
    }
    
    res.render("dashboard/index", {
        locals,
        layout: "../views/layouts/dashboard"
        });
}
