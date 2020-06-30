import React from "react"
import UserMyCourses from "../user-my-courses/UserMyCourses"

function UserMyCoursesList(props) {
 
    const myCourses = props.allCoursesOfThisUser
    .map(userCourse=>(
    <UserMyCourses 
        key={userCourse.courseId}
        userCourse={userCourse}
        userBooking={props.userBooking}
        allCoursesOfThisUser={props.allCoursesOfThisUser}
        setAllCoursesOfThisUser={props.setAllCoursesOfThisUser}
        getCoursesDataInAllUser={props.getCoursesDataInAllUser}
        />))

    // console.log(aa)
    return (
        <>
            {myCourses}
        </>
    )
}

export default UserMyCoursesList