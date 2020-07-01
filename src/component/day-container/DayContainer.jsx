import React from "react"
import "./DayContainer.scss"
import CourseBox from "../course-box/CourseBox"

function DayContainer(props) {
    // console.log('d:',props.newCourses)
    // console.log(props)


    const filterCourses = props.newCourses && props.newCourses
        .filter(course => course.courseTime.split(' ')[0] === props.title)
        .map(course => (
            <CourseBox
                key={course.courseId}
                course={course}
                bookingData={props.bookingData}
                getBookingData={props.getBookingData}
                getCoursesData={props.getCoursesData}
                currentUserId={props.currentUserId}
                thisUserBookingId={props.thisUserBookingId}
            />))

    return (
        <>
            <div className="dayContainer">
                <div className="day">{props.title}</div>
                <div className="courseBoxWrapper">
                <div className="courseBoxContainer">{filterCourses}</div>
                </div>
            </div>
        </>
    )
}

export default DayContainer