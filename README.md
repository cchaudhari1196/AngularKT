In browser DOM we can see active class added (extra than what we have in HTML template) for Button element.
Its because, We have used class binding.

[class.active]="isActive" => class 'active' will be added. If isActive flag is set. Which is true in TS file

If we make isActive=false, in Component.ts then, 'active' class will be removed from DOM.
