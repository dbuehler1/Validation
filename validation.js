$(document).ready(function () {
    $("registrationForm").submit(runMyProgram);
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true
                },
            grade:
                {
                    required: true,
                    digits: true
                }

        };

    // Object containing the error messages
    var myMessages =
        {
            firstName: "Please Enter Your Name",
            grade: "Enter Your Age"
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        event.preventDefault();
        var name = $("#firstName").val();
        var gradeA = $("#grade").val();
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        $("#message").text("You have registered " + name + " for grade " + gradeA + " camp!");


    }



});