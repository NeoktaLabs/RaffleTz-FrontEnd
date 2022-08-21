import React from 'react';
import Layout from "../components/layout/Layout";
import Link from "next/link";
import ProfileContainer from "../components/profile/ProfileContainer";

const Profile = () => {
    return (
        <Layout title="Profile | RaffleTz">
            <ProfileContainer />
        </Layout>
    );
};

export default Profile;
