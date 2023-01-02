<div class=" menu_flow-flex menu_main">
    <ul class=" menu_flow-flex ">
        <li>Classes</li>
        <li>Student</li>
        <li>Schedule</li>

    </ul>

    <div class=" menu_flow-flex submenu_settings">
        <p>Settings</p>
        <p>Log out</p>
    </div>
</div>
<style>
    .menu_flow-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .menu_main{
        background-color: aliceblue;
        width: 100%;
        color:black;
        padding:2px 15px;

    }
    .submenu_settings{
        display: flex;
        flex-direction: row;
        width:250px;
        justify-content: space-evenly;

    }
    ul{
        list-style: none;
        padding:0;
        width: 250px;

 
    }
    

</style>