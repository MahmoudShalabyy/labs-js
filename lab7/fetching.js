fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        // console.log(users);
        let tbody = document.getElementById("user-table");
        console.log(users);
        users.forEach((user) => {
         

            let tr = document.createElement("tr");

            let tdUsername = document.createElement("td");
            tdUsername.innerText = user.username;

            let tdEmail = document.createElement("td");
            tdEmail.innerText = user.email;

            let tdCompany = document.createElement("td");
            tdCompany.innerText = user.company.name;

            let tdAddress = document.createElement("td");
            tdAddress.innerText = user.address.geo.lat + " " + user.address.geo.lng;

            let tdPosts = document.createElement("td");
            let ul = document.createElement("ul");

            fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)
                .then((res) => res.json())
                .then((posts) => {
                    posts.forEach((post) => {
                        let li = document.createElement("li");

                        fetch("https://jsonplaceholder.typicode.com/comments?postId="+post.id)
                            .then((res) => res.json())
                            .then((comments) => {
                                li.innerText = post.title + "{" + comments.length + "}";
                                ul.appendChild(li);
                            });
                    });
                });

            tdPosts.appendChild(ul);
            tr.append(tdUsername, tdEmail, tdCompany, tdAddress, tdPosts);
            tbody.appendChild(tr);
        });
    })
    .catch((err) => console.log("Error: ", err));