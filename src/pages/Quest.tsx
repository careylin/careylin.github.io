import React, { useEffect } from "react";
import { Toggle } from "../App";
import "../theme.css";
import "./Quest.css";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { IconButton } from '../components/IconButton';

const Quest: React.FC = () => {
  useEffect(() => {
    document.title = "Quest ⨳ Carey Spies";
  }, []);

  return (
    <div className="App">
      <div className="grid">
        <Toggle />
        <span className="top-spacer" />

        <div className="title">
          <IconButton 
            icon={<ArrowLeft size={20} />}
            label="Back to home"
            variant="ghost"
            to="/"
          />
        </div>

        <div className="project-content">
          <h1 className="h300">Quest</h1>
          <h2 className="secondary">Design System</h2>
          <h2 className="secondary">2023 - Present</h2>
          <p className="h200">
            Quest is AllTrails' internal tool suite for customer support, 
            content moderation, and trail management.
          </p>
          <p className="h200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum egestas congue. Morbi pulvinar magna vitae lacus posuere, sed accumsan augue maximus. Phasellus facilisis ullamcorper ante ut accumsan. Suspendisse potenti. Phasellus a efficitur arcu. Phasellus egestas suscipit mauris, non tincidunt odio rutrum at. Nulla tempor est id massa fringilla, non laoreet justo viverra. In convallis, dui id hendrerit eleifend, enim quam vehicula turpis, nec egestas libero ipsum congue velit. Nulla eleifend magna sit amet cursus ullamcorper.

Ut bibendum, nulla ut accumsan dictum, erat massa vehicula lectus, a iaculis metus risus ac dui. Fusce ultrices odio ut nisi rutrum condimentum. In ut diam quam. Morbi tincidunt porta scelerisque. In hac habitasse platea dictumst. In id pellentesque erat. In id facilisis lorem. Suspendisse aliquet sodales purus, id maximus nunc accumsan nec. Praesent dictum tellus ac nibh lacinia consequat eget sit amet neque. Donec molestie auctor pretium. Duis maximus lacus a risus venenatis, non egestas erat blandit. Nullam tincidunt pretium nibh, vitae porttitor risus dignissim mattis. Nam sit amet ullamcorper dui.

Donec sed luctus felis. Nunc ac leo non velit aliquet vehicula id eget risus. Curabitur non ipsum non est consectetur ultricies. Cras a feugiat neque. Curabitur vitae turpis quis augue volutpat dapibus. Vestibulum venenatis facilisis pharetra. Ut at faucibus tellus. Donec tempor tortor tortor, ut sollicitudin lectus sodales in. Aliquam erat volutpat.

Phasellus sed erat mi. Pellentesque luctus, erat nec efficitur tincidunt, libero libero tempor purus, at efficitur nunc ex nec massa. Maecenas ac vehicula nisi. Suspendisse interdum a mi eget rutrum. Nunc in blandit ligula, eget feugiat arcu. In eget lacus ac leo congue gravida. Morbi vestibulum dolor a nisi hendrerit vulputate. Nullam fringilla ac arcu eget mattis. Vivamus ac turpis elit. Curabitur tempus rhoncus condimentum.

Donec ligula nisl, ultrices et commodo vitae, lobortis et lacus. Nullam vitae varius est. Duis leo justo, vestibulum sed laoreet at, semper eget nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vestibulum fermentum blandit. Proin lacus leo, porta sit amet euismod eget, faucibus non augue. In lectus neque, iaculis non dapibus at, volutpat eu mauris. In id interdum diam.
          </p>
          {/* Add more project content here */}
        </div>

        <div className="start-carpet carpet" />
        <div className="end-carpet carpet" />
        <span className="end-spacer" />
      </div>
    </div>
  );
};

export default Quest; 