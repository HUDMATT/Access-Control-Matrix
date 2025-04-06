var fileName;
var userName;

const subjectName = document.getElementById("subject");
if (subjectName) {
    userName = subjectName.value;
}

const accessMatrix = {
    Alice: { file1: "r", file2: "r/w", file3: "na", file4: "r/w" },
    Bob: { file1: "na", file2: "na", file3: "na", file4: "r" },
    Charlie: { file1: "r", file2: "r", file3: "r", file4: "r/w" },
    Dylan: { file1: "r", file2: "na", file3: "r/w", file4: "na" },
    Eugene: { file1: "r/w", file2: "r/w", file3: "r/w", file4: "r/w" },
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button[id^='file']").forEach(button => {
        button.addEventListener("click", () => {
            const fileName = button.id;
            const userName = document.getElementById("subject").value.trim();

            checkAccess(fileName, userName);
        });
    });

    const submitButton = document.getElementById("submit");
    if (submitButton) {
        submitButton.addEventListener("click", () => {
            const newText = document.getElementById("write").value;
            const editParagraph = document.getElementById("edit");
            if (editParagraph) {
                editParagraph.innerHTML = newText;
            }
        });
    }

    var submitNameButton = document.getElementById("submitName");
    if (submitNameButton) {
        submitNameButton.addEventListener("click", () => {
            document.getElementById("subjectName").innerHTML = document.getElementById("subject").value;
            document.getElementById("subjectForm").style.display = "none";
        });
    }
});

function checkAccess(fileName, userName) {
    if (!accessMatrix[userName]) {
        window.location.href = "noAccess.html";
        return;
    }

    const access = accessMatrix[userName][fileName];
    if (!access || access === "na") {
        window.location.href = "noAccess.html";
    } else {
        window.location.href = `${fileName}.html?user=${userName}`;
    }
}

function editFile() {
    const newText = document.getElementById("write").value;
    const editParagraph = document.getElementById("edit");
    if (editParagraph) {
        editParagraph.innerHTML = newText;
    }
}
