/**

* auth.js
* ใช้วางบนทุกหน้าที่ต้อง Login ก่อนเข้าใช้งาน
  */

(function () {


try {

    const userData =
        localStorage.getItem('currentUser');

    if (!userData) {

        alert("กรุณาเข้าสู่ระบบก่อนใช้งาน");

        window.location.replace(
            "index.html"
        );

        return;
    }

    const user =
        JSON.parse(userData);

    if (!user || !user.UserPN) {

        localStorage.removeItem(
            'currentUser'
        );

        window.location.replace(
            "index.html"
        );

        return;
    }

    window.user = user;

    console.log(
        "Welcome:",
        user.UserName,
        user.UserSname
    );

} catch (err) {

    console.error(err);

    localStorage.removeItem(
        'currentUser'
    );

    window.location.replace(
        "index.html"
    );

}


})();

/**

* คืนค่าข้อมูล User ปัจจุบัน
  */
  function getCurrentUser() {

  return window.user || null;

}

/**

* เช็คสิทธิ์ตาม UserType
  */
  function hasRole(role) {

  if (!window.user) return false;

  return (
  String(window.user.UserTypeID)
  .toUpperCase()
  ===
  String(role)
  .toUpperCase()
  );

}

/**

* แสดงชื่อผู้ใช้
  */
  function getDisplayName() {

  if (!window.user) return "";

  return (
  window.user.UserName +
  " " +
  window.user.UserSname
  );

}

/**

* Logout
  */
  function logout() {

  if (
  !confirm(
  "คุณต้องการออกจากระบบใช่หรือไม่ ?"
  )
  ) {
  return;
  }

  localStorage.removeItem(
  'currentUser'
  );

  sessionStorage.clear();

  window.location.replace(
  "index.html"
  );

}
