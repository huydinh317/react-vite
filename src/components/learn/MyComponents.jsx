import './style.css';
// jsx : 1 parent => giai phap dung fragment 
const MyComponent = () => {
    return (
        <> 
            <div> Eric & hoidanit update</div>
            <div className='child' 
            style={{borderRadius: "10px"}}
            > child</div>
        </>
    );
}

export default MyComponent;