document.addEventListener("DOMContentLoaded", () => {

    let tablecontent = document.getElementsByClassName("table-content")[0];

    let tablebutton = document.getElementById("BasicTable");
    tablebutton.addEventListener('click', showTable);

    function showTable() {
        console.log("table is clicked");

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "/dummy-url");

        xhr.onload = function () {
            str = ` 
            <h1 style="font-weight: 800;">Analytics</h1>
            <Table class="table table-bordered table-striped table-hover" style="margin-top: 50px;">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>Abram</td>
                    </tr>
                </tbody>
            </Table>
            `
            tablecontent.innerHTML = str;
        };

        xhr.send();

    }

});

