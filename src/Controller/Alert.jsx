import Swal from 'sweetalert2'

export default function Alert(){
    if(!localStorage.getItem("learwithbimash")){
        Swal.fire({
            title: 'info',
            text: `Please be advised that this is an incomplete version and you may encounter some bugs. We recommend proceeding with caution and keeping an eye out for any issues.`,
            icon: 'info',
            confirmButtonText: 'Cool',
            allowOutsideClick: false,
            }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem("learwithbimash", "checked");
            }
        });
    }
}