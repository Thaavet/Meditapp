import React, { useState } from 'react';
import PostItem from './PostItem';
import thumbnail_1 from './images/thumbnail_1.jpg';
import thumbnail_2 from './images/thumbnail_2.jpg';
import thumbnail_3 from './images/thumbnail_3.jpg';
import thumbnail_4 from './images/thumbnail_4.jpg';
import thumbnail_5 from './images/thumbnail_5.jpg';

const MediPosts = [
  
    {
      "id": 1,
      "title": "Mindfulness Meditation",
      "content": "Mindfulness meditation is a practice that involves focusing on the present moment without judgment. It can help reduce stress and improve mental clarity. Mindfulness meditation has been shown to have numerous benefits, including reducing anxiety and depression, improving sleep quality, and increasing feelings of well-being. To practice mindfulness meditation, find a quiet place where you can sit comfortably. Close your eyes and focus on your breath. Notice the sensation of the air moving in and out of your body. When your mind wanders, gently bring your attention back to your breath. Incorporating mindfulness practices into your daily routine can help you stay focused and calm throughout the day. You can practice mindfulness while doing everyday activities like washing dishes or taking a walk. Simply focus on the sensations you're experiencing in the present moment.",
      "thumbnail": thumbnail_1
    },
    {
      "id": 2,
      "title": "Benefits of Meditation",
      "content": "Meditation has numerous benefits, including stress reduction, improved focus, and enhanced self-awareness. Research has shown that meditation can also help lower blood pressure, reduce symptoms of anxiety and depression, and improve sleep quality. There are many different types of meditation, including mindfulness meditation, loving-kindness meditation, and body scan meditation. Each type of meditation has its own unique benefits and can be practiced by people of all ages and abilities. To get started with meditation, find a quiet place where you can sit comfortably. Close your eyes and focus on your breath. When your mind wanders, gently bring your attention back to your breath. With regular practice, you can experience the many benefits of meditation.",
      "thumbnail": thumbnail_2
    },
    {
      "id": 3,
      "title": "Guided Meditation for Beginners",
      "content": "If you're new to meditation, guided sessions can help you ease into the practice. Find a comfortable space, close your eyes, and follow the soothing voice guiding you through the meditation. Guided meditations can be found online or through meditation apps. They can help you focus your attention and stay present in the moment. With regular practice, you can develop your own meditation practice and experience the many benefits of this ancient practice.",
      "thumbnail": thumbnail_3
    },
    {
      "id": 4,
      "title": "Meditation for Inner Peace",
      "content": "Meditation can be a powerful tool for finding inner peace. By taking time to reflect and quiet your mind, you can create a peaceful space for your mind to unwind and rejuvenate. To practice meditation for inner peace, find a quiet place where you can sit comfortably. Close your eyes and focus on your breath. When your mind wanders, gently bring your attention back to your breath. With regular practice, you can cultivate a sense of inner peace that will help you stay calm and centered throughout the day.",
      "thumbnail": thumbnail_4
    },
    {
      "id": 5,
      "title": "Meditation and Emotional Well-being",
      "content": "Meditation can be a powerful tool for managing emotions and cultivating a positive mindset. By taking time to reflect and quiet your mind, you can develop greater self-awareness and learn to manage difficult emotions like anxiety and stress. To practice meditation for emotional well-being, find a quiet place where you can sit comfortably. Close your eyes and focus on your breath. When your mind wanders, gently bring your attention back to your breath. With regular practice, you can develop greater emotional resilience and cultivate a more positive outlook on life.",
      "thumbnail": thumbnail_5
    }
  ]



export const Posts = () => {
  const [posts, setPosts] = useState(MediPosts);
  return (
    <div className="post_container">
    
      {posts.map(post => <PostItem key={post.id} title={post.title} content={post.content} thumbnail={post.thumbnail} />)}
    </div>
  );
};