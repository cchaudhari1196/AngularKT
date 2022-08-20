For DEmo purpose, I have used colspan property.

Anctully on UI we will not see much change. But, we will get idea what it does.

If we used [colspan]="colspan". Then, We will get error saying - colspan is not known property.

Reason is bcz, colspan is property of <td> HTML element.

But, angular assumes it to be property of DOM. So, we need to instruct angular that this property belong to HTML element and not DOM object.
