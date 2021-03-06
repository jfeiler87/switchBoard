/*jslint white: true */
/*global State, module, require, console */

/**
 * Copyright (c) 2014 brian@bevey.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/**
 * @author brian@bevey.org
 * @fileoverview Manage desktop notification pushes.
 */

module.exports = (function () {
  'use strict';

  return {
    version : 20140806,

    /**
     * Accepts a title, message, device ID and image (all optional) and formats
     * them, then sends them to webSockets to be displayed.
     *
     * If you add a deviceId, clicking on the notification will cause that tab
     * to be selected on the client.
     *
     * Notifications are only available to clients that support both Desktop
     * Notifications (duh) as well as WebSockets.  It's assumed that if you do
     * not support WebSockets, it's unlikely you support Destktop Notifications.
     */
    sendNotification : function(title, message, deviceId, image) {
      var webSockets = require(__dirname + '/webSockets'),
          config     = {},
          i          = '';

      config.options      = {};
      config.options.icon = image    || '/images/icons/apple-touch-icon.png';
      config.options.body = message  || '';
      config.title        = title    || 'Switchboard';
      config.deviceId     = deviceId || '';

      webSockets.send(config);
    }
  };
}());
