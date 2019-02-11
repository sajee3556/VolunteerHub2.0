package com.sajee.volunteerhub.entity;

import javax.persistence.*;

@Entity
public class VolunteerPosts {
    @Id
    @Column(name = "VOLUNTEER_POSTS_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long volunteerPostsId;
    private String postTitle;
    private String postBody;
    private String userName;

    public long getVolunteerPostsId() {
        return volunteerPostsId;
    }

    public void setVolunteerPostsId(long volunteerPostsId) {
        this.volunteerPostsId = volunteerPostsId;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getPostBody() {
        return postBody;
    }

    public void setPostBody(String postBody) {
        this.postBody = postBody;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
