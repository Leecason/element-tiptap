// @ts-nocheck
import Logger from '@/utils/logger';

export function supportFullScreen (): boolean {
  const doc = document.documentElement;

  return ('requestFullscreen' in doc) ||
    ('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
    ('msRequestFullscreen' in doc && document.msFullscreenEnabled) ||
    ('webkitRequestFullScreen' in doc);
}

export function fullscreenStatus (): boolean {
  if (document.fullscreen ||
    document.mozFullScreen ||
    document.fullscreenElement ||
    document.msFullscreenElement ||
    document.webkitIsFullScreen) {
    return true;
  } else {
    return false;
  }
}

export function requestFullscreen (element: Element): void {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else {
    Logger.warn('Fullscreen API is not supported');
  }
}

export function exitFullscreen (): void {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    Logger.warn('Fullscreen API is not supported');
  }
}

export function onFullScreenEvent (callback: EventListenerOrEventListenerObject): void {
  document.addEventListener('fullscreenchange', callback);
  document.addEventListener('mozfullscreenchange', callback);
  document.addEventListener('MSFullscreenChange', callback);
  document.addEventListener('webkitfullscreenchange', callback);
}

export function offFullScreenEvent (callback: EventListenerOrEventListenerObject): void {
  document.removeEventListener('fullscreenchange', callback);
  document.removeEventListener('mozfullscreenchange', callback);
  document.removeEventListener('MSFullscreenChange', callback);
  document.removeEventListener('webkitfullscreenchange', callback);
}
