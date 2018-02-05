https://medium.com/trisfera/using-cors-in-express-cac7e29b005b

javascript event loop
https://www.youtube.com/watch?v=8aGhZQkoFbQ  


1. layout out with bootstrap  --done
2. Users creation
3. CRUD for question set.
4. display of question(exam)
5. reports




redirect to list page --done
save token -- done
implement logout --done
after login redirect to a subdomain and switch a database
enable/disable menu link depending on login or logout

advantage of bootstrap 4 over 3




https://reacttraining.com/react-router/web/example/custom-link


https://www.youtube.com/watch?v=1OU5ngq-WyM&list=PLQlWzK5tU-gDyxC1JTpyC2avvJlt3hrIh


centos
# process running on a port
ss -tanp | grep 3001


I’ve run into this problem too. Another solution is to toggle the SELinux boolean value for httpd network connect to on (Nginx uses the httpd label).

setsebool httpd_can_network_connect on
To make the change persist use the -P flag.

setsebool httpd_can_network_connect on -P
You can see a list of all available SELinux booleans for httpd using

getsebool -a | grep httpd



https://stackoverflow.com/questions/31126045/is-it-possible-to-create-a-new-database-in-mongodb-with-mongoose


https://daveceddia.com/open-modal-in-react/

https://www.bigbinary.com/videos/keep-up-with-reactjs/animation-in-react-js
