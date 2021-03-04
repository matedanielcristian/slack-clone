import { Apps, Create, Drafts, Edit,BookmarkBorder, ExpandLess, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt, ExpandMore, Add } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components';
import SidebarOption from "./SidebarOption"
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection("rooms"));

    const [user] = useAuthState(auth);
    
    
    console.log(channels, "channels");

    console.log("error", error)

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>MDC</h2>
                    <h3>
                        <FiberManualRecord/>
                        {user.displayName}
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title="Channel browser" /> 
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="Channel browser" />
            <SidebarOption Icon={Apps} title="People & user groups" />
            <SidebarOption Icon={FileCopy} title="People & user groups" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} title="Add Channel" addChannelOption={true} />
            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} id={doc.id}  title={doc.data().name} />
            ))

            }
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 10px;
        color:  #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;


const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;