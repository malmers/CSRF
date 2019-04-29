var forms = Array.from(document.getElementsByTagName("form"));
forms = forms.filter(form => form.method === "get");

console.log(forms.length);
