$("#edit_form").submit(function(e) {
    e.preventDefault();

    const data = $("#edit_form").serialize();
    console.log("data", data);

    $.ajax({
        url: "/contacts/update",
        data: data,
        method: "PUT",
        success: function(response) {
            window.location.href = "/contacts";
        }
    });
});

$("#delete").click(function(e) {
    e.preventDefault();

    const data = { id: $("#id").val() };
    console.log("data", data);

    $.ajax({
        url: "/contacts/delete",
        data: data,
        type: "DELETE",
        success: function(response) {
            window.location.href = "/contacts";
        }
    });
});
