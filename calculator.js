function showFormula() {
    var modelSelect = document.getElementById("modelSelect");
    var formulaOutput = document.getElementById("formulaOutput");
    formulaOutput.innerHTML = ""; // Vyčistenie obsahu

    if (modelSelect.value === "actual") { // Ak je vybraná možnosť Aktuálne modely
      document.getElementById("inputs").classList.remove("hidden");
      document.getElementById("actual-models").classList.remove("hidden");
      document.getElementById("modified-models").classList.add("hidden");
    } else if (modelSelect.value === "modified") { // Ak je vybraná možnosť Upravené matematické modely
      document.getElementById("inputs").classList.remove("hidden");
      document.getElementById("actual-models").classList.add("hidden");
      document.getElementById("modified-models").classList.remove("hidden");
    } else {
      document.getElementById("inputs").classList.add("hidden");
      document.getElementById("actual-models").classList.add("hidden");
      document.getElementById("modified-models").classList.add("hidden");
    }
  }

  function calc() {
    var dso = document.getElementById("dso").value;
    var sso = document.getElementById("sso").value;
    var dk = document.getElementById("dk").value;
    var ddk = document.getElementById("ddk").value;

    var actualModelClassName = document.getElementById("actual-models").className
    if (actualModelClassName === 'hidden') {
      console.log('modified model')
      document.getElementById("m-1").value = 2.815 * dso + 4.52 * sso + 50;
      document.getElementById("m-2").value = 2.88 * dso + 3.8692 * sso + 56;
      document.getElementById("m-3").value = 3 * dso + 4 * sso + 48.9;
      document.getElementById("m-4").value = 3.0425 * dso + 4.53 * sso + 45;
      document.getElementById("m-5").value = 0.001 * dk + 0.159 * ddk + 153;
      document.getElementById("m-6").value = 153 + 0.319 * dk;
      document.getElementById("m-7").value = 2.3 * dso + 4.6 * sso + 62.24;
      document.getElementById("m-8").value = 3.2 * dso + 2.86 * sso + 54;
      document.getElementById("m-9").value = 2.86 * dso + 4.2769 * sso + 48.5;
      document.getElementById("m-10").value = 2.86 * dso + 4.24 * sso + 49.75;
    } else {
      console.log('actual model')
      document.getElementById("a-1").value = 2.6 * dso + 4.3 * sso + 56;
      document.getElementById("a-2").value = 3.1 * dso + 4.0 * sso + 45;
      document.getElementById("a-3").value = 0.297 * dk + 153;
      document.getElementById("a-4").value = 0.315 * dk + 163;
      document.getElementById("a-5").value = 0.157 * ddk + 151;
      document.getElementById("a-6").value = 0.175 * ddk + 155;
      document.getElementById("a-7").value = 0.153 * dk + 0.083 * ddk + 155.5;
      document.getElementById("a-8").value = 0.076 * dk + 0.041 * ddk + 1.35 * dso + 2.4 * sso + 101.25;
      document.getElementById("a-9").value = 118.996 + 0.740652 * dk;
    }
  }
