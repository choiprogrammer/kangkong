    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "josh" && password === "mojica") {
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    })
� �8��Wy����0�<��,l"p�����M�"u�Zhf>kb�����2��%mn