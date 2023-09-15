import { gettext } from 'i18n'

const deviceInfo = hmSetting.getDeviceInfo()
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = deviceInfo

export const TEXT_STYLE = {
  text: gettext('appName'),
  x: 42,
  y: 200,
  w: DEVICE_WIDTH - 42 * 2,
  h: 100,
  color: 0xffffff,
  text_size: 36,
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP
}
