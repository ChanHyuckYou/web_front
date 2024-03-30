
export function CreateUser() {

    return (
        <form method="post" action="/user/create">
            <h3>이름</h3>
            <input type="text" name="name"></input>
            <h3>나이</h3>
            <input type="number" name="age"></input>
            <h3>소개</h3>
            <textarea name="introduce" rows="5"></textarea>

            <br></br>
            <input type="submit" value="생성"></input>
        </form>
    )
}
function UpdateUser({id}) {
    return (
        <form method="post" action="/user/update">
            <input type="" name="id" value={id}></input>
            <br></br>
            <input type="text" name="introduce"></input>
            <input type="submit" value="소개 수정"></input>
        </form>
    )
}
export default CreateUser
